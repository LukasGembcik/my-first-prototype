"use client";

import { useRef, useState, useCallback } from "react";
import { Button, Stack, Text, Image, Group, Box } from "@mantine/core";
export type CameraCaptureResult = { blob: Blob; dataUrl: string } | null;

type CameraCaptureProps = {
  onCapture?: (result: CameraCaptureResult) => void;
  label?: string;
};

export function CameraCapture({ onCapture, label = "Pořídit fotku" }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [captured, setCaptured] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  const startCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setActive(true);
    } catch (e) {
      setError("Kamera není dostupná nebo byla odepřena.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setActive(false);
  }, []);

  const capture = useCallback(() => {
    if (!videoRef.current || !streamRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const dataUrl = canvas.toDataURL("image/jpeg");
        setCaptured(dataUrl);
        stopCamera();
        onCapture?.({ blob, dataUrl });
      },
      "image/jpeg",
      0.9
    );
  }, [onCapture, stopCamera]);

  const reset = useCallback(() => {
    setCaptured(null);
    setError(null);
    onCapture?.(null);
  }, [onCapture]);

  return (
    <Stack gap="md">
      {label && <Text size="sm" fw={500}>{label}</Text>}
      {error && <Text size="sm" c="red">{error}</Text>}
      {!active && !captured && (
        <Button variant="light" onClick={startCamera}>
          Zapnout kameru
        </Button>
      )}
      {active && (
        <Box>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
          />
          <Group mt="sm">
            <Button onClick={capture}>Pořídit snímek</Button>
            <Button variant="default" onClick={stopCamera}>
              Zrušit
            </Button>
          </Group>
        </Box>
      )}
      {captured && (
        <Stack gap="xs">
          <Image src={captured} alt="Pořízený snímek" w={300} fit="contain" radius="md" />
          <Button variant="outline" size="sm" onClick={reset}>
            Pořídit znovu
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
