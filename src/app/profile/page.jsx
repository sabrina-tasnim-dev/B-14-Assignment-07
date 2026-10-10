"use client";

import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProfilePage() {
      const { data: session} = authClient.useSession();
    const user = session?.user;
console.log(user)
  const onSubmit = (e) => {
    e.preventDefault();

    toast.success("আপনার তথ্য সফলভাবে জমা হয়েছে!");
  };
  const router=useRouter()
    const handleSignout = async () => {
  try {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Sign out error:", error);
      toast.error("সাইন আউট করা যায়নি!");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    router.replace("/auth/sign-in");
    router.refresh();
  } catch (error) {
    console.error(error);
    toast.error("সাইন আউট করার সময় সমস্যা হয়েছে!");
  }
};

const handleUpdateProfile=async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const newUserData=Object.fromEntries(formData.entries())
    await authClient.updateUser({
        ...newUserData
    })
}

  return (
   <main className="flex min-h-screen items-center justify-center px-4 py-8 ">
    <div className="w-full max-w-md rounded-xl p-6 shadow-lg bg-green-50">
         <Form className="w-full max-w-96 text-center" onSubmit={handleUpdateProfile}>
      
      <div className="bg-white p-5 rounded-xl">
        <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
                  <div className="avatar">
            <Link href={"/profile"}>
         
<div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 overflow-hidden">
  {user?.image?.trim() ? (
    <Image
      src={user.image}
      alt="প্রোফাইল ছবি"
      width={50}
      height={50}
      className="h-10 w-10 rounded-full object-cover"
    />
  ) : (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white">
      {user?.name?.charAt(0)?.toUpperCase() || "U"}
    </div>
  )}
</div>

            </Link>
          </div>
          <p className="mt-1">{user?.name}</p>
            </div>
          <button  type="button" onClick={handleSignout} className="btn btn-error">
            SignOut
          </button>
        </div>
      </div>
      <Fieldset>

        <Fieldset.Legend>প্রোফাইল সেটিংস</Fieldset.Legend>

        <Description>
          আপনার প্রোফাইলের তথ্য হালনাগাদ করুন।
        </Description>

        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
              }

              return null;
            }}
          >
            <Label>আপনার নাম</Label>
            <Input placeholder="আপনার পুরো নাম লিখুন" />
            <FieldError />
          </TextField>
        
        </FieldGroup>

        <Fieldset.Actions>
          <Button onSubmit={handleUpdateProfile} type="submit">
            <FloppyDisk />
            পরিবর্তন সংরক্ষণ করুন
          </Button>

          <Button type="reset" variant="secondary">
            বাতিল করুন
          </Button>
        </Fieldset.Actions>
      </Fieldset>
      
    </Form>
    </div>
   </main>
  );
}