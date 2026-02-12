import React from 'react';
import { render, act } from '@testing-library/react';
import {
  FlexTable,
  FlexHeader,
  FlexFooter,
  FlexRow,
  FlexItem,
  FlexItemExpand,
} from '../src';

const renderRoot = (ui) => {
  const { container } = render(ui);
  return container.firstChild;
};

describe('FlexTable Component', () => {
  it('should render a base FlexTable if passed nothing for props', () => {
    const element = renderRoot(<FlexTable />);

    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexTable');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'column wrap');
    expect(element).toHaveStyleRule('flex', '1 1 auto');
    expect(element).toHaveStyleRule('min-width', '500px');
    expect(element).toHaveStyleRule('table-layout', 'fixed');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexTable
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexTable');
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'column wrap');
    expect(element).toHaveStyleRule('flex', '1 1 auto');
    expect(element).toHaveStyleRule('min-width', '500px');
    expect(element).toHaveStyleRule('table-layout', 'fixed');
  });
});

describe('FlexItem Component', () => {
  it('should render a base FlexItem if passed nothing for props', () => {
    const element = renderRoot(<FlexItem />);

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexItem');
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toHaveStyleRule('flex-basis', '0');
    expect(element).toHaveStyleRule('padding', '0.5em 24px');
    expect(element).toHaveStyleRule('white-space', 'pre-wrap');
    expect(element).toHaveStyleRule('word-break', 'keep-all');
    expect(element).toHaveStyleRule('min-width', '0');
    expect(element).toHaveStyleRule('margin', 'auto');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexItem
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexItem');
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toHaveStyleRule('flex-basis', '0');
    expect(element).toHaveStyleRule('padding', '0.5em 24px');
    expect(element).toHaveStyleRule('white-space', 'pre-wrap');
    expect(element).toHaveStyleRule('word-break', 'keep-all');
    expect(element).toHaveStyleRule('min-width', '0');
    expect(element).toHaveStyleRule('margin', 'auto');
  });
});

describe('FlexItemExpand Component', () => {
  it('should render a base FlexItemExpand not expanded css applied if passed nothing for props and itemexpanded = false', () => {
    const element = renderRoot(<FlexItemExpand itemexpanded={false} />);

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexItemExpand');
    expect(element.getAttribute('itemexpanded')).toBeNull();
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toHaveStyleRule('flex-basis', '0');
    expect(element).toHaveStyleRule('padding', '0.5em 24px');
    expect(element).toHaveStyleRule('white-space', 'pre-wrap');
    expect(element).toHaveStyleRule('word-break', 'keep-all');
    expect(element).toHaveStyleRule('min-width', '0');
    expect(element).toHaveStyleRule('margin', 'auto');
    expect(element).toHaveStyleRule('display', 'none');
    expect(element).toHaveStyleRule('opacity', '0');
  });

  it('should render a base FlexItemExpand expanded css applied if passed nothing for props and itemexpanded = true', () => {
    const element = renderRoot(<FlexItemExpand itemexpanded />);

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexItemExpand');
    expect(element.getAttribute('itemexpanded')).toBeNull();
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toHaveStyleRule('flex-basis', '100%');
    expect(element).toHaveStyleRule('padding', '0.5em 24px');
    expect(element).toHaveStyleRule('white-space', 'pre-wrap');
    expect(element).toHaveStyleRule('word-break', 'keep-all');
    expect(element).toHaveStyleRule('min-width', '0');
    expect(element).toHaveStyleRule('margin', 'auto');
    expect(element).toHaveStyleRule('display', 'default');
    expect(element).toHaveStyleRule('opacity', 'default');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexItemExpand
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexItemExpand');
    expect(element.getAttribute('itemexpanded')).toBeNull();
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toHaveStyleRule('flex-basis', '0');
    expect(element).toHaveStyleRule('padding', '0.5em 24px');
    expect(element).toHaveStyleRule('white-space', 'pre-wrap');
    expect(element).toHaveStyleRule('word-break', 'keep-all');
    expect(element).toHaveStyleRule('min-width', '0');
    expect(element).toHaveStyleRule('margin', 'auto');
    expect(element).toHaveStyleRule('display', 'none');
    expect(element).toHaveStyleRule('opacity', '0');
  });
});

describe('FlexHeader Component', () => {
  it('should render a base FlexHeader if passed nothing for props', () => {
    const element = renderRoot(<FlexHeader />);

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexHeader');
    expect(element.className).toBeTruthy();
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('background-color', 'transparent');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '0.8rem');
    expect(element).toHaveStyleRule('font-weight', '500');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexHeader
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexHeader');
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('background-color', 'transparent');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '0.8rem');
    expect(element).toHaveStyleRule('font-weight', '500');
  });
});

describe('FlexFooter Component', () => {
  it('should render a base FlexFooter if passed nothing for props', () => {
    const element = renderRoot(<FlexFooter />);

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexFooter');
    expect(element.className).toBeTruthy();
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '100%');
    expect(element).toHaveStyleRule('font-weight', '300');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexFooter
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexFooter');
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '100%');
    expect(element).toHaveStyleRule('font-weight', '300');
  });
});

describe('FlexRow Component', () => {
  it('should render a base FlexRow if passed nothing for props', () => {
    const element = renderRoot(
      <FlexRow>
        <FlexItemExpand>Test</FlexItemExpand>
      </FlexRow>
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBeGreaterThan(0);
    expect(element).toHaveAttribute('flexname', 'FlexRow');
    expect(element).toHaveAttribute('role', 'presentation');
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '100%');
    expect(element).toHaveStyleRule('font-weight', '300');
    expect(element).toHaveStyleRule('cursor', 'pointer');
  });

  it('should render custom props, custom css classes, and styles', () => {
    const element = renderRoot(
      <FlexRow
        data-custom="customProp"
        style={{ color: 'red' }}
        className="text-bold"
      />
    );

    expect(element.tagName.toLowerCase()).toBe('div');
    expect(element.childNodes.length).toBe(0);
    expect(element).toHaveAttribute('flexname', 'FlexRow');
    expect(element.getAttribute('data-custom')).toBe('customProp');
    expect(element.className).toContain('text-bold');
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('flex-flow', 'row wrap');
    expect(element).toHaveStyleRule('border-bottom', '1px solid #d0d0d0');
    expect(element).toHaveStyleRule('font-size', '100%');
    expect(element).toHaveStyleRule('font-weight', '300');
    expect(element).toHaveStyleRule('cursor', 'default');
  });

  it('should toggle expansion when FlexItem is clicked', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Click me</FlexItem>
        <FlexItemExpand>Expanded content</FlexItemExpand>
      </FlexRow>
    );

    const flexItem = container.querySelector('[flexname="FlexItem"]');
    const flexItemExpand = container.querySelector('[flexname="FlexItemExpand"]');

    // Initially collapsed - FlexItemExpand should have display: none
    expect(flexItemExpand).toHaveStyleRule('display', 'none');

    // Click the FlexItem
    act(() => {
      flexItem.click();
    });

    // After click, expansion state should change
    // The content should be visible (no display: none)
    const expandedElement = container.querySelector('[flexname="FlexItemExpand"]');
    expect(expandedElement).toHaveStyleRule('display', 'default');
  });

  it('should not toggle expansion when text is selected', () => {
    // Mock window.getSelection
    const originalGetSelection = window.getSelection;
    window.getSelection = jest.fn(() => ({
      toString: () => 'selected text',
    }));

    const { container } = render(
      <FlexRow>
        <FlexItem>Click me</FlexItem>
        <FlexItemExpand>Expanded content</FlexItemExpand>
      </FlexRow>
    );

    const flexItem = container.querySelector('[flexname="FlexItem"]');
    const flexItemExpand = container.querySelector('[flexname="FlexItemExpand"]');

    // Initially collapsed
    expect(flexItemExpand).toHaveStyleRule('display', 'none');

    // Click with text selected
    flexItem.click();

    // Should remain collapsed
    expect(flexItemExpand).toHaveStyleRule('display', 'none');

    // Restore original
    window.getSelection = originalGetSelection;
  });

  it('should toggle expansion on Enter key press', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Press Enter</FlexItem>
        <FlexItemExpand>Expanded content</FlexItemExpand>
      </FlexRow>
    );

    const flexItem = container.querySelector('[flexname="FlexItem"]');
    const flexItemExpand = container.querySelector('[flexname="FlexItemExpand"]');

    // Initially collapsed
    expect(flexItemExpand).toHaveStyleRule('display', 'none');

    // Simulate Enter key on FlexItem
    act(() => {
      const keyEvent = new KeyboardEvent('keyup', { key: 'Enter', bubbles: true });
      Object.defineProperty(keyEvent, 'target', { value: flexItem, enumerable: true });
      flexItem.dispatchEvent(keyEvent);
    });

    // After Enter key, expansion state should change
    const expandedElement = container.querySelector('[flexname="FlexItemExpand"]');
    expect(expandedElement).toHaveStyleRule('display', 'default');
  });

  it('should stop propagation on double click', () => {
    const onDoubleClick = jest.fn();
    const { container } = render(
      <div onDoubleClick={onDoubleClick}>
        <FlexRow>
          <FlexItem>Double click me</FlexItem>
        </FlexRow>
      </div>
    );

    const flexRow = container.querySelector('[flexname="FlexRow"]');

    // Double click the FlexRow
    flexRow.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));

    // Parent handler should not be called due to stopPropagation
    expect(onDoubleClick).not.toHaveBeenCalled();
  });

  it('should render multiple FlexItemExpand components with proper keys', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Item 1</FlexItem>
        <FlexItemExpand>Expand 1</FlexItemExpand>
        <FlexItem>Item 2</FlexItem>
        <FlexItemExpand>Expand 2</FlexItemExpand>
      </FlexRow>
    );

    const flexItemExpands = container.querySelectorAll('[flexname="FlexItemExpand"]');
    expect(flexItemExpands.length).toBe(2);

    // Both should initially be collapsed
    flexItemExpands.forEach((element) => {
      expect(element).toHaveStyleRule('display', 'none');
    });
  });

  it('should only show expanded content when expanded', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Item</FlexItem>
        <FlexItemExpand>
          <div data-testid="expanded-content">Hidden content</div>
        </FlexItemExpand>
      </FlexRow>
    );

    // Initially, content should not be in DOM
    expect(container.querySelector('[data-testid="expanded-content"]')).toBeNull();

    // Click to expand
    const flexItem = container.querySelector('[flexname="FlexItem"]');
    act(() => {
      flexItem.click();
    });

    // Now content should be in DOM
    expect(container.querySelector('[data-testid="expanded-content"]')).toBeTruthy();
  });

  it('should render FlexRow with single non-array child', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Single child</FlexItem>
      </FlexRow>
    );

    const flexRow = container.firstChild;
    expect(flexRow.childNodes.length).toBe(1);
    expect(flexRow).toHaveAttribute('flexname', 'FlexRow');
  });

  it('should not toggle expansion when clicking non-FlexItem elements', () => {
    const { container } = render(
      <FlexRow>
        <div data-testid="regular-div">Regular div</div>
        <FlexItemExpand>Expanded content</FlexItemExpand>
      </FlexRow>
    );

    const regularDiv = container.querySelector('[data-testid="regular-div"]');
    const flexItemExpand = container.querySelector('[flexname="FlexItemExpand"]');

    // Initially collapsed
    expect(flexItemExpand).toHaveStyleRule('display', 'none');

    // Click the regular div
    act(() => {
      regularDiv.click();
    });

    // Should remain collapsed
    expect(flexItemExpand).toHaveStyleRule('display', 'none');
  });

  it('should have default cursor when no FlexItemExpand children present', () => {
    const element = renderRoot(
      <FlexRow>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
      </FlexRow>
    );

    expect(element).toHaveStyleRule('cursor', 'default');
  });
});

describe('Component Integration', () => {
  it('should render complete table structure', () => {
    const { container } = render(
      <FlexTable>
        <FlexHeader>
          <FlexItem>Column 1</FlexItem>
          <FlexItem>Column 2</FlexItem>
        </FlexHeader>
        <FlexRow>
          <FlexItem>Data 1</FlexItem>
          <FlexItem>Data 2</FlexItem>
        </FlexRow>
        <FlexFooter>
          <FlexItem>Footer 1</FlexItem>
          <FlexItem>Footer 2</FlexItem>
        </FlexFooter>
      </FlexTable>
    );

    expect(container.querySelector('[flexname="FlexTable"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexHeader"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexRow"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexFooter"]')).toBeTruthy();
    expect(container.querySelectorAll('[flexname="FlexItem"]').length).toBe(6);
  });

  it('should render table with expandable rows', () => {
    const { container } = render(
      <FlexTable>
        <FlexHeader>
          <FlexItem>Name</FlexItem>
          <FlexItem>Status</FlexItem>
        </FlexHeader>
        <FlexRow>
          <FlexItem>John Doe</FlexItem>
          <FlexItem>Active</FlexItem>
          <FlexItemExpand>
            <div data-testid="details">Additional details for John</div>
          </FlexItemExpand>
        </FlexRow>
        <FlexRow>
          <FlexItem>Jane Smith</FlexItem>
          <FlexItem>Inactive</FlexItem>
        </FlexRow>
      </FlexTable>
    );

    const flexRows = container.querySelectorAll('[flexname="FlexRow"]');
    expect(flexRows.length).toBe(2);

    // First row should have pointer cursor (has FlexItemExpand)
    expect(flexRows[0]).toHaveStyleRule('cursor', 'pointer');

    // Second row should have default cursor (no FlexItemExpand)
    expect(flexRows[1]).toHaveStyleRule('cursor', 'default');

    // Details should not be visible initially
    expect(container.querySelector('[data-testid="details"]')).toBeNull();

    // Click to expand
    const firstRowItem = flexRows[0].querySelector('[flexname="FlexItem"]');
    act(() => {
      firstRowItem.click();
    });

    // Details should now be visible
    expect(container.querySelector('[data-testid="details"]')).toBeTruthy();
  });

  it('should render multiple rows with independent expansion states', () => {
    const { container } = render(
      <FlexTable>
        <FlexRow>
          <FlexItem>Row 1</FlexItem>
          <FlexItemExpand>
            <div data-testid="expand-1">Expand 1</div>
          </FlexItemExpand>
        </FlexRow>
        <FlexRow>
          <FlexItem>Row 2</FlexItem>
          <FlexItemExpand>
            <div data-testid="expand-2">Expand 2</div>
          </FlexItemExpand>
        </FlexRow>
      </FlexTable>
    );

    const flexRows = container.querySelectorAll('[flexname="FlexRow"]');

    // Initially both should be collapsed
    expect(container.querySelector('[data-testid="expand-1"]')).toBeNull();
    expect(container.querySelector('[data-testid="expand-2"]')).toBeNull();

    // Expand first row
    const firstRowItem = flexRows[0].querySelector('[flexname="FlexItem"]');
    act(() => {
      firstRowItem.click();
    });

    // Only first row should be expanded
    expect(container.querySelector('[data-testid="expand-1"]')).toBeTruthy();
    expect(container.querySelector('[data-testid="expand-2"]')).toBeNull();

    // Expand second row
    const secondRowItem = flexRows[1].querySelector('[flexname="FlexItem"]');
    act(() => {
      secondRowItem.click();
    });

    // Both rows should now be expanded
    expect(container.querySelector('[data-testid="expand-1"]')).toBeTruthy();
    expect(container.querySelector('[data-testid="expand-2"]')).toBeTruthy();
  });
});

describe('Edge Cases and Empty States', () => {
  it('should render components without children', () => {
    const { container } = render(
      <>
        <FlexTable />
        <FlexHeader />
        <FlexFooter />
        <FlexRow />
        <FlexItem />
      </>
    );

    expect(container.querySelector('[flexname="FlexTable"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexHeader"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexFooter"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexRow"]')).toBeTruthy();
    expect(container.querySelector('[flexname="FlexItem"]')).toBeTruthy();
  });

  it('should handle FlexRow with null children', () => {
    const { container } = render(
      <FlexRow>
        {null}
      </FlexRow>
    );

    const flexRow = container.firstChild;
    expect(flexRow).toHaveAttribute('flexname', 'FlexRow');
    expect(flexRow).toHaveStyleRule('cursor', 'default');
  });

  it('should handle FlexRow with undefined children', () => {
    const { container } = render(
      <FlexRow>
        {undefined}
      </FlexRow>
    );

    const flexRow = container.firstChild;
    expect(flexRow).toHaveAttribute('flexname', 'FlexRow');
  });

  it('should handle FlexRow with mixed valid and null children', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Valid item</FlexItem>
        {null}
        <FlexItem>Another valid item</FlexItem>
      </FlexRow>
    );

    const flexItems = container.querySelectorAll('[flexname="FlexItem"]');
    expect(flexItems.length).toBe(2);
  });

  it('should handle rapid click toggling', () => {
    const { container } = render(
      <FlexRow>
        <FlexItem>Click rapidly</FlexItem>
        <FlexItemExpand>Toggle content</FlexItemExpand>
      </FlexRow>
    );

    const flexItem = container.querySelector('[flexname="FlexItem"]');

    // Initial state: collapsed
    expect(container.querySelector('[flexname="FlexItemExpand"]')).toHaveStyleRule('display', 'none');

    // Click once to expand
    act(() => {
      flexItem.click();
    });
    expect(container.querySelector('[flexname="FlexItemExpand"]')).toHaveStyleRule('display', 'default');

    // Click again to collapse
    act(() => {
      flexItem.click();
    });
    expect(container.querySelector('[flexname="FlexItemExpand"]')).toHaveStyleRule('display', 'none');

    // Click third time to expand
    act(() => {
      flexItem.click();
    });
    expect(container.querySelector('[flexname="FlexItemExpand"]')).toHaveStyleRule('display', 'default');

    // Click fourth time to collapse
    act(() => {
      flexItem.click();
    });
    expect(container.querySelector('[flexname="FlexItemExpand"]')).toHaveStyleRule('display', 'none');
  });
});
