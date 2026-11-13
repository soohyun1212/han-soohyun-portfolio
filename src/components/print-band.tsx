export function PrintBand({ inverse = false }: { inverse?: boolean }) {
  return <div className={`print-band${inverse ? ' print-band--inverse' : ''}`} aria-hidden="true"/>;
}
