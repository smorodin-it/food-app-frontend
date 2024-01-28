import { FC, useState } from 'react';
import { cn } from '@bem-react/classname';
import { useZxing } from 'react-zxing';

// import './styles/BarcodeScanner.scss';

const cnBarcodeScanner = cn('BarcodeScanner');

interface BarcodeScannerProps {
  className?: string;
}

export const BarcodeScanner: FC<BarcodeScannerProps> = (props) => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [paused, setPaused] = useState(false);

  const { ref } = useZxing({
    paused,
    onDecodeResult(result) {
      setPaused(true);
      setResult(result.getText());
    },
    onDecodeError: (error) => {
      setError(error.message);
    },
    onError: (error) => {
      if (error instanceof Error) {
        setError(error.message);
      }
    },
  });

  const handleNewScan = (): void => {
    setPaused(false);
  };

  return (
    <div className={cnBarcodeScanner(undefined, [props.className])}>
      <video ref={ref} width={'100%'} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
      {error && (
        <p>
          <span>Error:</span>
          <span>{error}</span>
        </p>
      )}
      <button onClick={handleNewScan} disabled={!paused}>
        New Scan
      </button>
    </div>
  );
};
