import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorCard from '../../../components/AuthorCard';

const EditAuthor = () => {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  },
  [firebaseKey]);
  return (
    <AuthorCard obj={editItem} />
  );
};

export default EditAuthor;
