import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

export const OTP = () => {
  const [value, setValue] = React.useState("");
  const [step, setStep] = React.useState(1);
  const [isVerified, setIsVerified] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGenerated, setIsGenerated] = React.useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsVerified(true);
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl">Authentication & Preview</CardTitle>
        <CardDescription>
          {step === 1
            ? "Verify your identity to proceed"
            : "Review and generate your bank draft"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800 text-sm">
            For security purposes, please verify your identity using the one-time
            password sent to your registered device.
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <div className="flex w-full max-w-xs items-center justify-center">
                <InputOTP maxLength={6} value={value} onChange={setValue} >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code sent to your device
              </p>
            </div>
            <Button
              onClick={handleVerify}
              disabled={isLoading}
              className="w-full max-w-xs"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Identity"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
