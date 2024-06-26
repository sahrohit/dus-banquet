"use client";

import { Drawer } from "vaul";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useMediaQuery from "@/components/hooks/use-media-query";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: () => void;
}

const Modal = ({
  children,
  className,
  showModal,
  setShowModal,
}: ModalProps) => {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onClose={setShowModal}>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-card/80 backdrop-blur-sm" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-2xl border bg-card",
              className,
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        className={cn(
          "overflow-hidden bg-card p-4 md:max-w-lg md:border",
          className,
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
