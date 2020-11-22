Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки
заблокировать интерфейс, то можно использовать надстройку над `Spinner` – [ScreenSpinner](#!/ScreenSpinner).

```jsx
<View activePanel="spinner">
  <Panel id="spinner">
    <PanelHeader>Spinner</PanelHeader>
    <Group>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Spinner size="large" style={{ marginTop: 20 }} />
        <Spinner size="medium" style={{ marginTop: 20 }} />
        <Spinner size="regular" style={{ marginTop: 20 }} />
        <Spinner size="small" style={{ marginTop: 20 }} />
      </div>
    </Group>
  </Panel>
</View>
```
