import React from 'react';
import s from './Paginator.module.scss';

const Paginator = (props) => {
  const pagesCount = Math.ceil(
      props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const pagesSlice = pages.slice(props.startDisplayedPagesCount - 1,
      props.endDisplayedPagesCount);

  const onClickIterator = (e) => {
    switch (e.currentTarget.innerHTML) {
      case 'PREV': {
        const changePagesPart = {
          currentPage: props.currentPage - props.iteratorValue,
          startDisplayedPagesCount: props.startDisplayedPagesCount -
              props.iteratorValue,
          endDisplayedPagesCount: props.endDisplayedPagesCount -
              props.iteratorValue,
        };
        props.changePagesPart(changePagesPart);
        props.onPageChanged(changePagesPart.currentPage);
        break;
      }
      case 'NEXT': {
        if (pagesCount - props.currentPage >= props.iteratorValue) {
          const changePagesPart = {
            currentPage: props.currentPage + props.iteratorValue,
            startDisplayedPagesCount: props.startDisplayedPagesCount +
                props.iteratorValue,
            endDisplayedPagesCount: props.endDisplayedPagesCount +
                props.iteratorValue,
          };
          props.changePagesPart(changePagesPart);
          props.onPageChanged(changePagesPart.currentPage);
        } else {
          const changePagesPart = {
            currentPage: props.currentPage +
                (pagesCount - props.currentPage),
            startDisplayedPagesCount: props.startDisplayedPagesCount +
                (pagesCount - props.currentPage),
            endDisplayedPagesCount: props.endDisplayedPagesCount +
                (pagesCount - props.currentPage),
          };
          props.changePagesPart(changePagesPart);
          props.onPageChanged(changePagesPart.currentPage);
          break;
        }
      }
    }
  };

  return (
      <div className={s.paginator}>
        <button onClick={onClickIterator}
                disabled={props.startDisplayedPagesCount <= 1 &&
                'disabled'}>
          PREV
        </button>
        {pagesSlice.map(p =>
            <span onClick={() => props.onPageChanged(p)}
                  className={p === props.currentPage && s.selected}>
                  {p}
                </span>,
        )}
        <button onClick={onClickIterator}
                disabled={props.endDisplayedPagesCount >=
                pagesCount && 'disabled'}>
          NEXT
        </button>
      </div>);
};

export default Paginator;