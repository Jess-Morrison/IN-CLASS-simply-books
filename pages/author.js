import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';

export default function Author() {
  const { user } = useAuth();

  const [authors, setAuthors] = useState([]);

  useEffect(() => { getAuthors(user.uid).then(setAuthors); }, [user.uid]);

  return (
    <div>
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div>
        { authors.map((author) => (<AuthorCard key={author.firebaseKey} />))}
      </div>

    </div>
  );
}
