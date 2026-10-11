import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-around p-10 bg-green-50 mt-5 sm:px-6 sm:py-8'>
            <div  className="mx-auto flex max-w-7xl flex-col items-center justify-between 
            gap-3 text-center md:flex-row md:gap-6 md:text-left">
                <h1>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</h1>
            <h1>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</h1>
            </div>
        </div>
    );
};

export default Footer;