'use client'
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { toast } from 'react-toastify';
import { Check, Eye, EyeSlash } from '@gravity-ui/icons';
import { redirect } from "next/navigation";
import { useState } from "react";



const SignInPage = () => {
    const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    if(data){
        redirect("/")
    }
   toast.success(`You have logedin successfully!`);;
  };
   const [isVisible, setIsVisible] = useState(false);
    return (
        <main className="min-h-screenpx-4 py-8">
        <div className="mx-auto  bg-green-50  flex w-full max-w-md flex-col items-center">
           <div className="text-center ">
      <h1 className="text-2xl font-bold text-gray-900">
        সাইন ইন
      </h1>
      <p className="mt-2 text-sm text-gray-600">
     বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
    </div> 
           <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return"সঠিক ইমেইল ঠিকানা লিখুন";
          }
          return null;
        }}
      >
        <Label>ইমেইল ঠিকানা</Label>
        <Input placeholder="আপনার ইমেইল লিখুন" />
        <FieldError />
      </TextField>
         <TextField className="w-full " name="password"
         minLength={8}
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
        }}>
      <Label>পাসওয়ার্ড</Label>
     
      <InputGroup>
        <InputGroup.Input  
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          value={isVisible ? "পাসওয়ার্ড লিখুন" : "••••••••"}
        />
        <InputGroup.Suffix className="pe-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>

    </TextField>
      {/* <TextField

        isRequired
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
      </TextField> */}
      <div className="w-full ">
        <Button type="submit" className="w-full ">
                 <Check />
                সাইন ইন
               </Button>
       
      </div>
    </Form>

        </div>
        </main>
    );
};

export default SignInPage;