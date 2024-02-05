import { useState } from "react";


import { LoginSection } from "./components/LoginSection";
import { SignUpSection } from "./components/SignUpSection";
import { FillInfos } from "./components/fillInfos";


export const LoginPage = () => {
    const [step, setStep] = useState(0)

    return (
        <>
            <div className="bg-[#d6d6d6] min-h-[100vh] flex justify-center py-[3rem]">
                {
                    step === 0 ?
                        <LoginSection step={step} setStep={setStep} />
                        : step === 1 ?
                            <SignUpSection step={step} setStep={setStep} />
                            :
                            <FillInfos />
                }
            </div>
        </>
    )
}