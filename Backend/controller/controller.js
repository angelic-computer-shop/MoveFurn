const client = require('../config/dbConfig.js');

const getUsers = (request, response) => {
    client.query('SELECT * FROM userss ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      
    })
  }

 

// @desc POST single logged user
  // @route POST /users
  const login = (request, response) => {
    const { email,  password } = request.body

    client.query('SELECT * FROM driving WHERE email = $1 AND password = $2', [email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


//get driver

const getDrivers = (request, response) => {
  client.query('SELECT * FROM driving ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    
  })
}



//get user by id

  client
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('SELECT * FROM userss WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //get driver by id

  client
  
  const getDriverById = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('SELECT * FROM driving WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  //create user
  const createUser = (request, response) => {
    const { name,surname,idno,cellno,address, email,password } = request.body
  
    client.query('INSERT INTO userss (name,surname,idno,cellno,address, email,password) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *', [name,surname,idno,cellno,address, email,password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  
 //create drver
 const createDriver = (request, response) => {
  const { name,surname,cellno,idno,licenseno, email,password,trucktype} = request.body

  client.query('INSERT INTO driving (name,surname,cellno,idno,licenseno, email,password,trucktype ) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING *', [name,surname,cellno,idno,licenseno, email,password,trucktype], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send({message: `Driver added with ID: ${results.rows[0].id}`})
  })
}

  
  //update user
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name,surname,idno,cellno,address, email,password } = request.body
  
    client.query(
      'UPDATE userss SET name= $1,surname= $2,idno= $3,cellno= $4,address= $5, email= $6,password= $7 WHERE id = $8',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }



   //update driver
   const updateDriver = (request, response) => {
    const id = parseInt(request.params.id)
    const { name,surname,cellno,idno,licenseno, email,password,trucktype } = request.body
  
    client.query(
      'UPDATE driving SET name= $1,surname= $2,cellno= $3,idno= $4,licenseno= $5, email= $6,password= $7,trucktype= $8 WHERE id = $9',
      [name,surname,cellno,idno,licenseno, email,password,trucktype , id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  //delete user
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('DELETE FROM userss WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  //delete driver

  const deleteDriver = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('DELETE FROM driving WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

   //create bookings
   client
 const createBooking = (request, response) => {
  const { pick,drop,cellno,altno,noitems, need} = request.body

  client.query('INSERT INTO booking (pick,drop,cellno,altno,noitems, need) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *', [pick,drop,cellno,altno,noitems, need], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send({message: `booikings added with ID: ${results.rows[0].id}`})
  })
}

 //get bookings by id

 client
  
 const getBookingById = (request, response) => {
   const id = parseInt(request.params.id)
 
   client.query('SELECT * FROM booking WHERE id = $1', [id], (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
 }

  //get bookings by id

  
  
  const getBookings = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('SELECT * FROM booking ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      
      }
      response.status(200).json(results.rows)
    })
  }
  
  module.exports = {

    //user
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login,
    
    //driver
    getDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver,

    //Bookings
    createBooking,
    getBookingById,
    getBookings

  }