import { createContext, useContext, useState } from 'react'

const ReserveContext = createContext(null)

export function ReserveProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('Wini Desktop Robot')

    const openReserveModal = (productName = 'Wini Desktop Robot') => {
        setSelectedProduct(productName)
        setIsOpen(true)
    }

    const closeReserveModal = () => {
        setIsOpen(false)
    }

    return (
        <ReserveContext.Provider value={{ isOpen, selectedProduct, openReserveModal, closeReserveModal }}>
            {children}
        </ReserveContext.Provider>
    )
}

export function useReserve() {
    const context = useContext(ReserveContext)
    if (!context) {
        throw new Error('useReserve must be used within a ReserveProvider')
    }
    return context
}
