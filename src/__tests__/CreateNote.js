import React from 'react';
import { CreateNote, mapDispatchToProps } from '../containers/CreateNote';
import { addNote } from '../thunks/addNote';
import { shallow } from 'enzyme';

jest.mock('../thunks/addNote');

describe('', () => {
	let wrapper;
	let mockFn;
	beforeEach(() => {
		mockFn = jest.fn();
		wrapper = shallow(
			<CreateNote addNote={mockFn} />
		);
	})

	it('matches snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('', () => {

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