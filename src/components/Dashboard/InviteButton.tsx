'use client';

import Button from '../ui/Button';
import useUrl from '@/hooks/useUrl';

const InviteButton = ({ link }: { link?: string }) => {
  if (!link) return null;

  const baseUrl = useUrl();

  const inviteUrl = baseUrl + '/join?token=' + link;

  const createInviteLink = async () => {
    if (!baseUrl) return;

    try {
      await navigator.clipboard.writeText(inviteUrl);
    } catch (error) {
      alert('Error copying to clipboard: ' + error);
    }
  };
  return <Button onClick={createInviteLink}>Copy invite link</Button>;
};

export default InviteButton;
