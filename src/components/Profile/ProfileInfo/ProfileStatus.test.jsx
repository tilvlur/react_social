import React from 'react';
import TestRenderer, {create, act} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in local state', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='test' />);
    const testInstance = testRenderer.root;
    expect(testInstance.props.status).toBe('test');
  });

  test('after creation <span> should be displayed', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='test' />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('span'));
  });

  test(`after creation <input> shouldn't be displayed`, () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='test' />);
    const testInstance = testRenderer.root;
    expect(() => testInstance.findByType('input').toThrow());
  });

  test('after creation <span> should contains correct status', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='test' />);
    const testInstance = testRenderer.root;
    const span = testInstance.findByType('span');
    expect(span.children[0]).toBe('test');
  });

  test('input should be displayed in editMode instead of span', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='test' />);
    const testInstance = testRenderer.root;
    const span = testInstance.findByType('span');
    span.props.onDoubleClick();
    const input = testInstance.findByType('input');
    const inputValue = input.props.value;
    expect(inputValue).toBe('test');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const testRenderer = TestRenderer.create(<ProfileStatus
        status='test'
        updateStatus={mockCallback} />);
    const testInstance = testRenderer.root;
    const span = testInstance.findByType('span');
    span.props.onDoubleClick();
    const input = testInstance.findByType('input');
    input.props.onBlur();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});
