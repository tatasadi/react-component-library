import Button from "../components/Button/Button"
export default function ButtonExample() {
  return (
    <div className="flex gap-4 items-center p-10">
      <Button size="sm">Small</Button>
      <Button>Normal</Button>
      <Button size="lg">Large</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
}
