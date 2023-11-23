"use client";
import ProductDesignerSectionHeading from "./ProductDesignerSectionHeading"
export default function ProductDesignerSectionWrapper({ children, heading }: { children: React.ReactNode, heading: string }) {
    return (
        <div className="flex flex-col">
            <ProductDesignerSectionHeading heading={heading} />

            <div className="px-4 py-3 border mt-2 rounded-lg flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}