import { useContext, useState } from "react";
import { MyContext } from "../../utils/contextProvider";
import { useSearchParams } from "react-router-dom";
import { useSelect } from "@material-tailwind/react";
import { FileInput, Label } from 'flowbite-react';
import { IoCloudUploadOutline } from "react-icons/io5";



import { LoginSection } from "./components/LoginSection";
import { SignUpSection } from "./components/SignUpSection";
import { AddImgSection } from "./components/AddImgSection";
import { SuggestionsSection } from "./components/SuggestionsSection";


export const LoginPage = () => {
    const [step, setStep] = useState(0)

    return (
        <>
            <div className="bg-[#d6d6d6] min-h-[100vh] flex justify-center items-center">
                {
                    step === 0 ?
                        <LoginSection step={step} setStep={setStep} />
                        : step === 1 ?
                            <SignUpSection step={step} setStep={setStep} />
                            : step === 2 ?
                                <AddImgSection step={step} setStep={setStep} />
                                :
                                <SuggestionsSection />
                }
            </div>
        </>
    )
}