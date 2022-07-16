/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, image,
}) {
  return (
    <>
      <div>Author </div>
      <div> Email: {email}</div>
      <div> FirebaseKey: {firebaseKey}</div>
      <div> First Name: {firstName}</div>
      <div> Last Name: {lastName}</div>
      <div> Favorite : {favorite}</div>
      <img src={image} alt={firstName} width="300" height="300" />
    </>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  favorite: PropTypes.bool,

};

AuthorCard.defaultProps = {
  email: 'ta@ta.com',
  firebaseKey: '-MiBsfuTafbEQ7eAULxV',
  firstName: 'Tomi',
  lastName: 'Adeyemi',
  image: 'https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg',
  favorite: 'True',

};
