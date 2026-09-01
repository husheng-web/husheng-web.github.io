interface ProfileMetaProps {
  label: string;
  value?: string;
}

export function ProfileMeta({ label, value = "[CONTENT TODO]" }: ProfileMetaProps) {
  return (
    <dl className="grid grid-cols-[minmax(7rem,0.7fr)_minmax(0,1.3fr)] gap-4 border-t border-[var(--border)] py-3">
      <dt className="type-label text-[var(--foreground-muted)]">{label}</dt>
      <dd className="text-[var(--foreground-secondary)]">{value}</dd>
    </dl>
  );
}
