'use client';
import { useState } from 'react';
import { Arrow } from './icons';

export function ContactActions() {
  const [message, setMessage] = useState('');
  async function copyPhone() {
    try { await navigator.clipboard.writeText('010-8266-5074'); setMessage('전화번호가 복사되었습니다.'); }
    catch { setMessage('복사하지 못했습니다. 전화번호를 직접 선택해 복사해주세요.'); }
  }
  return <><div className="contact-grid"><div><span className="contact-label">E-MAIL</span><a className="contact-value" href="mailto:sky4194119@naver.com">sky4194119@naver.com</a><a className="contact-action" href="mailto:sky4194119@naver.com">메일 보내기 <Arrow diagonal/></a></div><div><span className="contact-label">PHONE</span><span className="contact-value">010-8266-5074</span><button type="button" className="contact-action" onClick={copyPhone}>전화번호 복사 <span aria-hidden="true">＋</span></button></div></div><p className="copy-status" role="status" aria-live="polite">{message}</p></>;
}
