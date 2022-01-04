import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

export default function Login() {
  console.log(process.env.API_END_POINT);
  return (
    <div>
      <h1>login</h1>
    </div>
  );
}
