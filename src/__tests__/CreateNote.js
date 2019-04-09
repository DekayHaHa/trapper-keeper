import React from 'react';
import { CreateNote, mapDispatchToProps } from '../containers/CreateNote';
import { addNote } from '../thunks/addNote';
import { changeNote } from '../thunks/changeNote';
import { shallow } from 'enzyme';
import { ItemTextField } from '../containers/ItemTextField';
import { Redirect } from 'react-router-dom'

jest.mock('../thunks/addNote');
jest.mock('../thunks/changeNote');

describe('', () => {
	let wrapper;
	let mockFn;
	beforeEach(() => {
		mockFn = jest.fn();
		wrapper = shallow(
			<CreateNote changeNote={mockFn} addNote={mockFn} />
		);
	})

	it('matches snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			title: '',
			itemsList: [],
			open: false,
			redirect: false
		})
	})

	it('should set state if props are passed', () => {
		const mockNote = { title: 'title', itemsList: ['items'] }
		wrapper = shallow(
			<CreateNote {...mockNote} addNote={mockFn} />
		)
		expect(wrapper.state()).toEqual({
			title: 'title',
			itemsList: ['items'],
			open: true,
			redirect: false
		})
	})

	it('should update state depending on event', () => {
		let mockEvent = { target: { name: 'title', value: 'this title' } }
		wrapper.find('#title').simulate('change', mockEvent)
		expect(wrapper.state('title')).toEqual('this title')
	})

	it('should add list item to state', () => {
		wrapper.instance().addListItem('new item');
		expect(wrapper.state('itemsList')[0].text).toEqual('new item')
	})

	describe('handle submit', () => {
		const mockEvent = { preventDefault: () => { } }

		it.skip('should fire changeNote with new edit if edit is true', () => {
			wrapper.instance().handleSubmit(mockEvent)
			expect(wrapper.props.changeNote).toHaveBeenCalled()
		})

		it.skip('should fire addNote with data if edit is false', () => {

		})

		it('should reset state', () => {
			wrapper.setState({
				title: 'title',
				itemsList: ['items'],
				open: true,
				redirect: true
			})
			wrapper.instance().handleSubmit(mockEvent)
			expect(wrapper.state()).toEqual({
				title: '',
				itemsList: [],
				open: false,
				redirect: false
			})
		})
	})

	it('should toggle a single items complete key', () => {
		wrapper.setState({
			itemsList: [
				{ id: 1, isComplete: false },
				{ id: 2, isComplete: false }
			]
		})
		wrapper.instance().handleIsComplete(2)
		expect(wrapper.state('itemsList')).toEqual([
			{ id: 1, isComplete: false },
			{ id: 2, isComplete: true }
		])
	})

	it('should update single item by id', () => {
		wrapper.setState({
			itemsList: [
				{ id: 1, isComplete: false, text: 'first' },
				{ id: 2, isComplete: false, text: 'second' }
			]
		})
		wrapper.instance().updateItem({ id: 2, isComplete: true, text: 'found' })
		expect(wrapper.state('itemsList')).toEqual([
			{ id: 1, isComplete: false, text: 'first' },
			{ id: 2, isComplete: true, text: 'found' }
		])
	})

	it('should redirect after saving note', () => {
		wrapper.setState({ redirect: true })
		const result = wrapper.instance().checkRedirect()
		expect(result).toEqual(<Redirect to="/" />)
	})

	it('should remove item by id', () => {
		wrapper.setState({
			itemsList: [
				{ id: 1, isComplete: false, text: 'first' },
				{ id: 2, isComplete: false, text: 'second' }
			]
		})
		wrapper.instance().removeItem(1)
		expect(wrapper.state('itemsList')).toEqual([
			{ id: 2, isComplete: false, text: 'second' }
		])
	})

	describe('mapDispatchToProps', () => {
		it('calls dispatch with a addNote action', async () => {
			const mockDispatch = jest.fn();
			const mockItem = { title: "title", itemsList: [] }
			const actionToDispatch = addNote(mockItem);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addNote(mockItem);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
})