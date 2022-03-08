import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

const NewsLetter = () => {
  return (
    <>
      <div className='banner-nl'>
        <div className='titre-nl'>
          <h1>Newsletter</h1>
        </div>
        <div className='text-info-nl'>
          <h3>Soyez les premiers à être informés de nos actualités !</h3>
        </div>
        <MailchimpSubscribe url={'https://gmail.us14.list-manage.com/subscribe/post?u=3d643a3976eec9ec481f6a43f&amp;id=f9244b0c4c'} render={({ subscribe, status, message }) => (
              <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
                )}
            />
      </div>
    </>
  );
};

export default NewsLetter;
