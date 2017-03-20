--Introduction to SQL queries with Music History

-- no.1
SELECT * FROM artist
-- no.2 
INSERT INTO artist(artistName) VALUES(Spoon)
-- no.3
INSERT INTO album VALUES(NULL,'Alb Name', 1900-01-10, 60, 'hot', NULL, NULL)
-- no.4
INSERT INTO song VALUES(NULL,'Song Name', 1900-01-10, 60, 'hot', NULL, NULL)
-- no.5
SELECT a.Title, s.Title,art.ArtistName
FROM Song s
LEFT JOIN Album a
ON s.AlbumId = a.AlbumId
LEFT JOIN Artist art
ON art.Artistid = a.Artistid;
-- no.6
SELECT COUNT(s.SongId), a.Title
FROM Album a
LEFT JOIN Song s
ON s.AlbumId = a.AlbumId
GROUP BY a.AlbumId;
-- no.7
SELECT COUNT(s.SongId), a.Title
FROM Artist a
LEFT JOIN Song s
ON s.ArtistId = a.ArtistId
GROUP BY s.ArtistId;
-- no.8
SELECT COUNT(s.SongId), g.Label
FROM Genre g
LEFT JOIN Song s
ON s.GenreId = g.GenreId
GROUP BY s.GenreId;
-- no.9
SELECT MAX(a.AlbumLength) Duration, a.Title
FROM Album a;
-- no.10
SELECT MAX(SongLength) Duration, Title
FROM Song;
-- no.11
SELECT MAX(s.SongLength) Duration, s.Title "Song Title", a.Title "Album Title"
FROM Song s
LEFT JOIN Album a
ON s.AlbumId = a.AlbumId;
