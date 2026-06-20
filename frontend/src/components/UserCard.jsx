// UserCard is a simple presentational component.
// Put reusable UI pieces like this in src/components/.
export function UserCard({ name, role }) {
  return (
    <div className="border border-border bg-surface rounded-lg px-4 py-3 mb-2">
      <strong className="font-semibold">{name}</strong>
      {' — '}
      <em className="text-muted">{role}</em>
    </div>
  )
}
