import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mic, MessageCircle } from "lucide-react";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog: React.FC<ConsultationDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-xl font-heading font-bold">Start Consultation</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            "Get instant access to certified dermatologists anytime you need help.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <button className="flex items-center gap-3 px-5 py-4 rounded-xl bg-primary text-primary-foreground transition-all hover:opacity-90">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-heading font-semibold text-sm">Audio Call</div>
              <div className="text-xs opacity-80">Speak directly with expert</div>
            </div>
          </button>

          <button className="flex items-center gap-3 px-5 py-4 rounded-xl bg-secondary text-secondary-foreground border border-border transition-all hover:opacity-90">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-heading font-semibold text-sm">WhatsApp</div>
              <div className="text-xs text-muted-foreground">Chat and share photos</div>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
