import React from 'react';
import { CreateNote, mapDispatchToProps } from '../containers/CreateNote';
import { addNote } from '../thunks/addNote';
import { changeNote } from '../thunks/changeNote';
import { shallow } from 'enzyme';
import { ItemTextField } from '../containers/ItemTextField';

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
		it('should fire changeNote with new edit if edit is true', () => {

		})

		it('should fire addNote with data if edit is false', () => {

		})

		it('should reset state', () => {

		})
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