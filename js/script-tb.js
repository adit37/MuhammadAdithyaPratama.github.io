		$(document).ready(function(){
			$('.nama').click(function(){
				let nama = $(this).text()
				let edit = prompt('Edit Nama:', nama)

				if(!edit) return
				$(this).text(edit)
			})
			$('.alamat').click(function(){
				let alamat = $(this).text()
				let edit = prompt('Edit Alamat:', alamat)

				if(!edit) return
				$(this).text(edit)
			})
			$('.del-btn').click(function(){
				let yakin = confirm('Anda yakin ingin menghapusnya?')

				if(!yakin) return
				let id = $(this).prop('id')
				let rid = id.split('_')
				let baris = rid[1]
				$('#row-'+baris).slideUp()
			})
		})
