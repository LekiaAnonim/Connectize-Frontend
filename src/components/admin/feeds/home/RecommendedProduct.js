import React from "react";
import Avatar from '@mui/material/Avatar';

import AvatarGroup from '@mui/material/AvatarGroup';
import './MainContainer.css'

export default function RecommendedProduct() {
    return (
      <div className="recommended-product-container">
        <h3>Recommended products</h3>
        <div className="product-image-title-react">
          <div className="product-image-title">
            <img src="/images/produc_drum.jpeg" alt="product name" />
            <div className="product-title">
              <h4>Premium Black Gold Reserve</h4>
              <AvatarGroup className="product-people">
                <Avatar
                  className="avatar"
                  alt="Remy Sharp"
                  src="/images/OIG4.jpeg"
                />
                <Avatar
                  className="avatar"
                  alt="Travis Howard"
                  src="/images/woman_singing_ghs.jpg"
                />
              </AvatarGroup>
            </div>
          </div>
          <div className="product-react">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29276 7.06458C6.16097 5.19006 9.18993 5.19006 11.0581 7.06458L12.4593 8.47047L13.8605 7.06458C15.7287 5.19006 18.7576 5.19006 20.6258 7.06458C22.494 8.9391 22.494 11.9783 20.6258 13.8528L12.4593 22.0469L4.29276 13.8528C2.42455 11.9783 2.42455 8.9391 4.29276 7.06458Z"
                fill="#242424"
              />
            </svg>
            <span>178k</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}