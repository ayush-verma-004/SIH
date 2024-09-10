package com.example.donationapp;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

@RestController
public class DonationController {

    // API endpoint to generate the QR code
    @GetMapping("/generateQR")
    public String generateQRCode(@RequestParam String amount) {
        String upiId = "ayushverma593773-2@oksbi";
        String name = "Ayush Verma";
        String upiString = String.format("upi://pay?pa=%s&pn=%s&am=%s&cu=INR", upiId, name, amount);

        try {
            // Generate the QR code
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(upiString, BarcodeFormat.QR_CODE, 200, 200);
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", outputStream);

            // Encode to Base64 to send to the frontend
            byte[] qrImage = outputStream.toByteArray();
            return Base64.getEncoder().encodeToString(qrImage);

        } catch (WriterException | IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
