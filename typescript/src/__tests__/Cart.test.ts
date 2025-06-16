import Book from "../book";
import Cart from "../Cart";
import Movie from "../movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('В корзину должен добавиться фильм', () => {
  const cart = new Cart();
  const movie = new Movie(
    1000,
    'The Avengers',
    350,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  );
  cart.add(movie);
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual([movie]);
  expect(cart.items[0]).toEqual(movie);
})

test('В корзину должны добавиться выбранные элементы', () => {
  const cart = new Cart();
  const movie = new Movie(
    1000,
    'The Avengers',
    350,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  );
  const book = new Book(1008, 'You do not know JS', 'Kyle Simpson', 2000, 500);
  cart.add(movie);
  cart.add(book);
  expect(cart.items.length).toBe(2);
  expect(cart.items).toEqual([movie, book]);
});

test('Метод sum должен вернуть корректное значение', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(
    1000,
    'The Avengers',
    350,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  ));
  cart.add(new Book(1009, 'You do not know JS', 'Kyle Simpson', 2000, 500));
  expect(cart.sum()).toBe(4350);
  expect(cart.sum(10)).toBe(3915);
});

test('Метод delete должен удалить элемент из массива items', () => {
  const cart = new Cart();
  const movie = new Movie(
    1000,
    'The Avengers',
    350,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  );
  const book = new Book(1001, 'You do not know JS', 'Kyle Simpson', 1000, 500);
  cart.add(movie);
  cart.add(book);
  cart.delete(1000);
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual([book]);
});