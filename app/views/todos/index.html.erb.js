module.exports = () => `
<p id="notice"><%= notice %></p>

<h1>Todos</h1>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="3"></th>
    </tr>
  </thead>

  <tbody>
    <% @todos.each do |todo| %>
      <tr>
        <td><%= todo.name %></td>
        <td><%= link_to 'Show', todo %></td>
        <td><%= link_to 'Edit', edit_todo_path(todo) %></td>
        <td><%= link_to 'Destroy', todo, method: :delete, data: { confirm: 'Are you sure?' } %></td>
      </tr>
    <% end %>
  </tbody>
</table>

<br>

<%= link_to 'New Todo', new_todo_path %>
`