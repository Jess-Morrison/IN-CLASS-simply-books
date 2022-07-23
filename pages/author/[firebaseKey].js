/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';
import { getAuthorBooks } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';

function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  console.warn(authorDetails);
  // const [bookDetails, setBookDetails] = useState({});
  const router = useRouter();
  // eslint-disable-next-line camelcase
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  // eslint-disable-next-line camelcase
  }, [firebaseKey]);

  return (

    <div className="d-flex flex-wrap">
      <AuthorCard key={firebaseKey} authorObj={authorDetails} onUpdate={viewAuthorDetails} />
      {authorDetails.books?.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorBooks} />
      ))}
    </div>
  );
}

export default ViewAuthor;
