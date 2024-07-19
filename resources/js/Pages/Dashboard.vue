<template>
    <h1>User Table</h1>
    <table class="bg-black">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>user1</td>
                <td>user1@example.com</td>
                <td>
                    <a href="#" class="btn btn-edit">Edit</a>
                    <a href="#" class="btn btn-delete">Delete</a>
                </td>
            </tr>
            <tr>
                <td>user2</td>
                <td>user2@example.com</td>
                <td>
                    <a href="#" class="btn btn-edit">Edit</a>
                    <a href="#" class="btn btn-delete">Delete</a>
                </td>
            </tr>
            <tr>
                <td>user3</td>
                <td>user3@example.com</td>
                <td>
                    <a href="#" class="btn btn-edit">Edit</a>
                    <a href="#" class="btn btn-delete">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>

export default{
  name: 'Dashboard'
}

</script>