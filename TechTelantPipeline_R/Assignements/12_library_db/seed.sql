-- Start with DROP TABLE IF EXISTS for all three tables
-- in the correct order (checkouts first, then books and 
-- members because of foreign key dependencies).

DROP TABLE IF EXISTS checkouts;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS members;


-- Write CREATE TABLE statements for all three tables 
-- using the schema above.

CREATE TABLE members (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    membership_type VARCHAR(20) default 'standard',
    joined_at TIMESTAMP default NOW()
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    published_year INTEGER,
    available BOOLEAN default true
);

CREATE TABLE checkouts (
    id  SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    member_id INTEGER REFERENCES members(id) ON DELETE CASCADE,
    checked_out_at    TIMESTAMP default NOW(),
    returned_at TIMESTAMP 
);

--  Insert at least 6 members with a mix of standard 
--  and premium membership types.
INSERT INTO members (name, email, membership_type) 
VALUES 
('Phyo T. Oo', 'phyo@gmail.com', 'Premium'),
('Homer', 'homer@gmail.com', 'Standard'),
('Nick', 'nick@gmail.com', 'Premium'),
('Daemon', 'daemon@hotmail.com', 'Premium'),
('Emma', 'emma@yahoo.com', 'Standard'),
('Vile', 'vile@gmail.com', 'Standard');

--  Insert at least 10 books across at least 3 genres.
--  Set available = false for at least 2 books.
INSERT INTO books (title, author, genre, published_year, available)
VALUES
  ('Dune', 'Frank Herbert', 'Sci-Fi', 1965, false),
  ('Neuromancer', 'William Gibson', 'Sci-Fi', 1984, false),
  ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937, true),
  ('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'Fantasy', 1997, true),
  ('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925, true),
  ('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960, true),
  ('The Martian', 'Andy Weir', 'Sci-Fi', 2011, true),
  ('Pride and Prejudice', 'Jane Austen', 'Classic', 1813, true),
  ('The Name of the Wind', 'Patrick Rothfuss', 'Fantasy', 2007, true),
  ('Atomic Habits', 'James Clear', 'Self-Help', 2018, true);

--  Insert at least 5 checkouts — some returned (with a 
-- returned_at value), some not (leave returned_at as NULL).

INSERT INTO checkouts (book_id, member_id, checked_out_at, returned_at)
VALUES 
  (1, 2, NOW() - INTERVAL '10 days', NULL),
  (2, 4, NOW() - INTERVAL '5 days', NULL),
  (3, 1, NOW() - INTERVAL '20 days', NOW() - INTERVAL '12 days'),
  (5, 3, NOW() - INTERVAL '15 days', NOW() - INTERVAL '7 days'),
  (7, 6, NOW() - INTERVAL '3 days', NULL);
