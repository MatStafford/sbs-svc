module.exports = {
      responseObj: {
        status: 500,
        message: 'Internal server error',
        body: {}
    },
    databaseStatus: {
        ENTITY_CREATED: 'Entity Created',
        ENTITY_MODIFIED: 'Entity Modified',
        ENTITY_FETCHED: 'Entity Fetched',
        ENTITY_DELETED: 'Entity Deleted',
        DATABASE_CONNECTED: 'Database connected succesfully!',
        DATABASE_ERROR: 'Database error'
    },
    controllerStatus: {
        BAD_REQUEST: 'Required fields missing'
    },
    serviceStatus: {
        USER_CREATED_SUCCESSFULLY: 'User created successfully!',
        USER_LIST_FETCHED_SUCCESSFULLY: 'User list fetched successfully!',
        USER_FETCHED_SUCCESSFULLY: 'User fetched successfully'
    }
};