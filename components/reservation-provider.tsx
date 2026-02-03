"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ReservationModal } from "@/components/reservation-modal";

interface ReservationContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ReservationContext = createContext<ReservationContextType | null>(null);

export function useReservation() {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservation must be used within ReservationProvider");
    }
    return context;
}

export function ReservationProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ReservationContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <ReservationModal isOpen={isOpen} onClose={closeModal} />
        </ReservationContext.Provider>
    );
}
