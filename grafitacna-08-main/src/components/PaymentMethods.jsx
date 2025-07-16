import React from "react";
import bcpLogo from "../../public/payments/bcp.jpg"
import interbankLogo from "../../public/payments/interbank.png";
import yapeLogo from "../../public/payments/yape.jpg";
import visaLogo from "../../public/payments/visamaster.jpg";

export function PaymentMethods() {
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-600 mb-2">Métodos de pago aceptados:</p>
      <div className="flex space-x-2">
        <div className="bg-white p-2 rounded shadow">
          <img src={bcpLogo} alt="BCP" className="h-14 object-contain" />
        </div>
        <div className="bg-white p-2 rounded shadow">
          <img src={interbankLogo} alt="Interbank" className="h-14 object-contain" />
        </div>
        <div className="bg-white p-2 rounded shadow">
          <img src={yapeLogo} alt="Yape" className="h-14 object-contain" />
        </div>
        <div className="bg-white p-2 rounded shadow">
          <img src={visaLogo} alt="Visa" className="h-14 object-contain" />
        </div>
      </div>
    </div>
  );
}
