'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import {Check} from "@gravity-ui/icons";
import { signUp } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

const SignUpPage = () => {
      const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // const password = formData.get("password");
    // c
    console.log('from data',data)

    const {data:resData,error}=await signUp.email({
        name:'',
        email:data.email,
        password:data.password
    })

toast.success(`You have submited successfully!`);
  
console.log(resData,error)

if(data){
    redirect("/")
}
};
    return (
       
<main className="min-h-screen bg-[#f0f5f0] px-4 py-8">
  <div className="mx-auto flex w-full max-w-md flex-col items-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        অ্যাকাউন্ট তৈরি করুন
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        বিনামূল্যে সাইন আপ করে পণ্যের বিস্তারিত দাম দেখুন।
      </p>
    </div>

    <Form
      className="mt-5 flex w-full flex-col items-stretch gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="name"
        className="w-full"
        validate={(value) => {
          if (value.length < 3) {
            return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
          }
          return null;
        }}
      >
        <Label>আপনার নাম</Label>
        <Input placeholder="সম্পূর্ণ নাম লিখুন" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        className="w-full"
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "সঠিক ইমেইল ঠিকানা লিখুন";
          }
          return null;
        }}
      >
        <Label>ইমেইল ঠিকানা</Label>
        <Input placeholder="আপনার ইমেইল লিখুন" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        className="w-full"
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
          }
          if (!/[A-Z]/.test(value)) {
            return "কমপক্ষে একটি ইংরেজি বড় হাতের অক্ষর দিন";
          }
          if (!/[0-9]/.test(value)) {
            return "কমপক্ষে একটি সংখ্যা দিন";
          }
          return null;
        }}
      >
        <Label>পাসওয়ার্ড</Label>
        <Input placeholder="পাসওয়ার্ড লিখুন" />
        <Description>
          কমপক্ষে ৮ অক্ষর, একটি বড় হাতের ইংরেজি অক্ষর ও একটি সংখ্যা দিন।
        </Description>
        <FieldError />
      </TextField>
      
<TextField
  isRequired
  className="w-full"
  name="confirmPassword"
  type="password"
>
  <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
  <Input placeholder="আবার পাসওয়ার্ড লিখুন" />
  <FieldError />
</TextField>


      <div className="flex gap-3 pt-2">
        <Button type="submit" className="flex-1">
          <Check />
          সাইন আপ করুন
        </Button>

        <Button type="reset" variant="secondary">
          মুছে ফেলুন
        </Button>
      </div>
    </Form>
    <p>or</p>
    <button className='btn btn-success'><FaGoogle /></button>
  </div>
</main>

    );
};

export default SignUpPage;
