import React from 'react';
import { FaLock, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const SecurityFeatures = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-betweenpx-6 md:px-20 py-20 bg-white text-gray-800">
      {/* Illustration */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="/images/security.png"
          alt="Security Illustration"
          className="max-w-md w-full"
        />
      </div>

      {/* Features */}
      <div className="w-full md:w-1/2">
        <h3 className=" flex gap-1 text-green-600 font-semibold text-sm mb-2"><img src="./images/flower.svg" />Security Features</h3>
        <h2 className="text-4xl font-bold mb-4">Our Security Features</h2>
        <p className="mb-6 text-gray-600">
          Advanced security measures to protect your investments, transactions, and personal data from threats.
        </p>

        {/* Feature List */}
        <div className="space-y-6">
          {/* SSL Encryption */}
          <div className="flex items-start space-x-4">
            <FaCreditCard className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-bold text-lg">SSL Encryption</h4>
              <p className="text-gray-600">
                Ensuring secure transactions and data protection with advanced SSL encryption technology.
              </p>
            </div>
          </div>
          <hr/>

          {/* Two-factor authentication */}
          <div className="flex items-start space-x-4">
            <FaShieldAlt className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-bold text-lg">Two-factor authentication (2FA)</h4>
              <p className="text-gray-600">
                Enhancing account security with an extra layer of two-factor authentication (2FA).
              </p>
            </div>
          </div>
          <hr/>

          {/* Secure Payment Gateways */}
          <div className="flex items-start space-x-4">
            <FaCreditCard className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-bold text-lg">Secure payment gateways</h4>
              <p className="text-gray-600">
                Safe and reliable transactions through trusted and encrypted payment gateways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
