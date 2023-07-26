import Button from "./Button"
export default function ButtonExample() {
  return (
    <div className="button-example">
      <Button size="sm">small</Button>
      <Button>Normal</Button>
      <Button size="lg">large</Button>
      <Button variant="success">Normal</Button>
      <Button variant="warning">Normal</Button>
      <Button variant="danger">Normal</Button>
    </div>
  )
}
