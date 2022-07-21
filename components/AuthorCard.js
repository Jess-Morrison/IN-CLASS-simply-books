/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        {/* <div>Author </div> */}
        <div> First Name: {authorObj.first_name}</div>
        <div> Last Name: {authorObj.last_name}</div>
        <div> Email: {authorObj.email}</div>
        <div> favorite : {authorObj.favorite}</div>
        {/* <div> FirebaseKey: {authorObj.firebaseKey}</div>
        <img src={authorObj.image} alt={authorObj.first_name} width="200" height="200" /> */}
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    // image: PropTypes.string,

  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// AuthorCard.defaultProps = {
//   email: 'ta@ta.com',
//   firebaseKey: '-MiBsfuTafbEQ7eAULxV',
//   first_name: 'Tomi',
//   last_name: 'Adeyemi',
//   favorite: true,
// //   image: 'https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg',

// };
