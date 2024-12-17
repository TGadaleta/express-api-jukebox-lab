import express from 'express'
import Track from '../models/Track.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find({})
        res.status(200).json(tracks)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:trackId', async (req, res) => {
    try {
        const track = await Track.findById(req.params.trackId)
        res.status(200).json(track)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:trackId', async (req, res) => {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, 
            {new: true})
        res.status(200).json(updatedTrack)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:trackId', async (req, res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId)
        res.status(200).json(deletedTrack)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;