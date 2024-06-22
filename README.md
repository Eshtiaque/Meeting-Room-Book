# Meeting Room Booking System 
## Live Server :  https://meeting-room-booking-beta.vercel.app/


**Objective :**

Create an elegant and intuitive web application designed to optimize the booking process for co-working spaces. This application will empower administrators to efficiently manage room reservations, including adding, updating, and deleting rooms and time slots. Simultaneously, it will provide users with a seamless experience to book available rooms and time slots, with real-time updates on availability and pricing, ensuring a smooth and efficient reservation process for all parties involved.

### Technology Stack :
- **TypeScript** 
- **Express.js** 
- **MongoDB** 
- **Mongoose** 
___
### Models:

1. **User Model:**
   - `name`: String
   - `email`: String (unique)
   - `password`: String
   - `phone`: String
   - `address`: String
   - `role`: String (`user` or `admin`)

2. **Room Model:**
   - `name`: String
   - `roomNo`: Number (unique)
   - `floorNo`: Number
   - `capacity`: Number
   - `pricePerSlot`: Number
   - `amenities`: [String] 
   - `isDeleted`: Boolean

3. **Slot Model:**
   - `room`: ObjectId (Reference to Room)
   - `date`: Date
   - `startTime`: String
   - `endTime`: String
   - `isBooked`: Boolean

4. **Booking Model:**
   - `room`: ObjectId (Reference to Room)
   - `slots`: [ObjectId] (References to Slot)
   - `user`: ObjectId (Reference to User)
   - `date`: Date
   - `totalAmount`: Number
   - `isConfirmed`: String (`confirmed`, `unconfirmed`, `canceled`)
   - `isDeleted`: Boolean

___

### Features:

#### Admin Actions:
- **Room Management:**
  - Add, modify, and remove rooms.
  - Define room details including name, room number, floor, capacity, price per slot, and amenities.

- **Slot Management:**
  - Set up time slots for each room.
  - Define date, start time, and end time for each slot.


#### User Interactions:
- **Booking:**
  - Make reservations by choosing available slots for a specific date and room.
  - The system calculates the total cost based on the selected slots and their prices.
- Receive real-time updates on room and slot availability.

### Endpoints:

1. **User Routes:**
   - **Sign Up:** `POST /api/auth/signup`
   - **Login:** `POST /api/auth/login`

2. **Room Routes (Admin Only):**
   - **Create Room:** `POST /api/rooms`
   - **Get Room:** `GET /api/rooms/:id`
   - **Get All Rooms:** `GET /api/rooms`
   - **Update Room:** `PUT /api/rooms/:id`
   - **Delete Room (Soft Delete):** `DELETE /api/rooms/:id`

3. **Slot Routes (Admin Only):**
   - **Create Slot:** `POST /api/slots`
   - **Get Available Slots:** `GET /api/slots/availability`

4. **Booking Routes (Authenticated Users):**
   - **Create Booking:** `POST /api/bookings`


___

Thank you ❤️