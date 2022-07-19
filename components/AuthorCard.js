/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({

  email, firebaseKey, first_name, last_name, favorite, image,
}) {
  return (
    <>
      <div>Author </div>
      <div> Email: {email}</div>
      <div> FirebaseKey: {firebaseKey}</div>
      <div> First Name: {first_name}</div>
      <div> Last Name: {last_name}</div>
      <div> Favorite : {favorite}</div>
      <img src={image} alt={first_name} width="200" height="200" />
    </>
  );
}

AuthorCard.propTypes = {
  // authorObj: PropTypes.shape({
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

  // }).isRequired,
};

// AuthorCard.defaultProps = {
//   email: 'ta@ta.com',
//   firebaseKey: '-MiBsfuTafbEQ7eAULxV',
//   firstName: 'Tomi',
//   lastName: 'Adeyemi',
//   favorite: true,
//   image: 'https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg',

// };
