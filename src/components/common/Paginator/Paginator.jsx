import React, {useState} from 'react';
import s from './Paginator.module.scss';

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  pagesPortionSize = 10,
}) => {
  // Количество страниц с 'айтемсами'
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  // Заполняем массив номерами страниц
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // Количество порций страниц к отображению
  let portionCount = Math.ceil(pagesCount / pagesPortionSize);
  // Хук для организации перемещения по порциям страниц
  let [portionNumber, setPortionNumber] = useState(1);
  // Границы отображения порций
  let leftPortionPageNumber = (portionNumber - 1) * pagesPortionSize + 1;
  let rightPortionPageNumber = portionNumber * pagesPortionSize;

  return (
      <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          PREV
        </button>}

        {pages
            .filter(
                p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
              return (
                  <span className={p === currentPage && s.selected}
                        onClick={() => onPageChanged(p)}
                        key={p}>
                    {p}
                  </span>);
            })}

        {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          NEXT
        </button>}
      </div>
  );
};

export default Paginator;