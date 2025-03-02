import { cn } from "@/lib/utils";
import { UploadButton } from "@/utils/uploadthing";
import { buttonVariants } from "../ui/button";
import { Camera } from "lucide-react";

type AddCoverButtonProps = {
  handleCoverUpload: (coverUrl: string) => void;
};

export const AddCoverButton = ({ handleCoverUpload }: AddCoverButtonProps) => {
  return (
    <UploadButton
      endpoint="imageUploader"
      appearance={{
        button: cn(
          buttonVariants(),
          "ut-uploading:after:bg-primary ut-ready:bg-primary ut-uploading:bg-primary/80 ut-readying:bg-primary/80 focus-within:ring-ring focus-within:outline-none focus-within:ring-2 active:ring-primary",
        ),
        allowedContent: "hidden",
      }}
      onClientUploadComplete={(res) => {
        handleCoverUpload(res[0]?.ufsUrl ?? "");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
      content={{
        button: (
          <div className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span>Add cover</span>
          </div>
        ),
      }}
    />
  );
};
