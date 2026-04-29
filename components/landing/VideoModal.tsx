'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export default function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4">
          <div className="relative bg-black rounded-2xl aspect-video flex items-center justify-center">
            <p className="text-white/40 text-lg font-medium">Video próximamente</p>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white/50 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
