import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  //   console.log(instaPhotos[0]);
  const username = 'oshaoutreach';
  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1 rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
            href={`https://instagram.com/p/${photo.id}`}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
